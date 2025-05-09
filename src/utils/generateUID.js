export default function generateUID() {
  let uid = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const currentDate = new Date();

  uid += currentDate.getTime();

  for (let i = 0; i < 10; i++) {
    uid += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return uid;
}