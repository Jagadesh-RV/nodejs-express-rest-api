const globalErrorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  
  // Distinguish between Zod validation errors and internal server errors
  if (err instanceof z.ZodError) {
    return res.status(400).json({ status: 'fail', errors: err.errors });
  }

  // Log full stack trace for internal server errors only
  if (statusCode === 500) {
    console.error('CRITICAL ERROR:', err);
  }

  res.status(statusCode).json({
    status: err.isOperational ? 'fail' : 'error',
    message: err.message
  });
};