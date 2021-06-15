class InternalServer extends Error {
  constructor() {
    super('internal-server')
  }
}

export { InternalServer }
