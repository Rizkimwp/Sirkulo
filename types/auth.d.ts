export type AuthResponse = {
  accessToken:string;
  user: {
    id: user.id;
    name: user.name;
    username: user.username;
    email: user.email;
    avatar: user.avatar;
    role: user.role;
    points: user.points;
    createdAt: user.createdAt;
  };
};


export type LoginGoogleParams = {
  idGoogle: string;
}