import { ErrorAPI } from '../utils/ErrorAPI.js';
import { User } from '../models/userSchema.js';
import { ResponseAPI } from '../utils/ResponseAPI.js';
import { AsyncWrap } from '../utils/AsyncWrap.js';
const generateRefreshAccess = async (userId) => {
  try {
    const user = await User.findOne(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();
    user.refreshToken = refreshToken;
    const newUser = await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ErrorAPI(400, 'unable to generate Refresh and Access Token');
  }
};

//? userRegistration Api
const userRegistration = AsyncWrap(async (req, res) => {
  //get all  user info from frontend
  const { username, fullname, email, password, DOB } = req.body;
  //check if required user field are receive or not
  if (
    [username, fullname, email, password, DOB].some(
      (field) => field?.trim() === ''
    )
  ) {
    throw new ErrorAPI(400, 'All Field required , Some Fields are Missing ,');
  }
  //check if user with the same email/username exist in the data base or not
  const existedUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (existedUser) {
    throw new ErrorAPI(400, 'User with this Username or Email Already Exist');
  }

  // create user & save in the database

  const user = await User.create({
    username: username.toLowerCase(),
    password,
    email,
    fullname,
    DOB,
  });

  // send response in the frontend
  const userFromDb = await User.findOne(user._id).select(
    '-password -refreshToken'
  );

  res
    .status(200)
    .json(
      new ResponseAPI(200, { user: userFromDb }, 'User Registered Successfully')
    );
});

const userLogin = AsyncWrap(async (req, res) => {
  //get user detail from body
  const { username, password } = req.body;
  if (!(username && password)) {
    throw ErrorAPI(400, 'Username Or Password is Missing');
  }
  // check if user exist in database or not
  const user = await User.findOne({ username });

  if (!user) {
    throw new ErrorAPI(400, 'User is Not Registered');
  }
  // check if password is correct or not
  const isPasswordCorrect = await user.isPasswordCorrect(password);
  // console.log(`controller :${isPasswordCorrect}`);

  if (isPasswordCorrect === false) {
    throw new ErrorAPI(400, 'Password is Incorrect');
  }

  //generate access and refresh token
  const { accessToken, refreshToken } = await generateRefreshAccess(user._id);

  // send Response API with cookie

  const loggedUser = await User.findOne(user._id).select(
    '-password -refreshToken'
  );

  const option = {
    httpOnly: true,
    secure: true,
  };
  res
    .status(200)
    .cookie('accessToken', accessToken, option)
    .cookie('refreshToken', refreshToken, option)
    .json(
      new ResponseAPI(
        200,
        { user: loggedUser, refreshToken, accessToken },
        'User Logged In'
      )
    );
});

export { userRegistration, userLogin };
