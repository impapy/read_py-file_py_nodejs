import { NextFunction, Request, Response } from 'express'
import Error from '../../interfaces/error.interfaces'
import { validationObjectId } from '../../validator'
import { spawn, spawnSync } from 'child_process'
import path from 'path'

export const testPy = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { error, value } = validationObjectId(req.params)
    if (error) {
      throw new Error(` invalid request ${(error as Error).message}`)
    }
    const { _id: id } = value
    const subprocess = spawnSync('python3', [path.join(__dirname, 'pyTest.py'), id])

    const result = subprocess.stdout?.toString()?.trim()
    const errors = subprocess.stderr?.toString()?.trim()
    if (errors) throw new Error(` invalid request ${errors}`)
    res.json({
      status: 'succss',
      data: result,
      message: ' succss',
    })
  } catch (error) {
    next(error)
  }
}
