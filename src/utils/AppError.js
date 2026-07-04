class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true; // Flags it as a known, handled error
    Error.captureStackTrace(this, this.constructor);
  }
}