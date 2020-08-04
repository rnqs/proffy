import { Request, Response } from 'express'

import db from '../database/connection'

const index = async (request: Request, response: Response) => {
  const totalConnections = await db('connections').count('* as total')

  const { total } = totalConnections[0]

  return response.json({ total })
}

const create = async (request: Request, response: Response) => {
  const { user_id } = request.body

  await db('connections').insert({ user_id })

  return response.status(201).send()
}

export default { index, create }
