export default function Avatar({ user }) {
    return (
      <img
        src={user.photoURL}
        alt={'Photo of ' + user.name}
        className="avatar"
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    );
  }