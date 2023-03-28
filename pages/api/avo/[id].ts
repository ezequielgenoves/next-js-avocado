import DB from '@database'
import { NextApiRequest, NextApiResponse } from 'next'

const AvoById = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = new DB()
  const id = req.query.id
  const entry = await db.getById(id.toString())
  res.status(200).json(entry)
}

export default AvoById
