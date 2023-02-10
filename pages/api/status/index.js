export default function handler(req, res) {
  res.status(200).json({ platform: 'vercel', status: "successfull", env: "production" })
}