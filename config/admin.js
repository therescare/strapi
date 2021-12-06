module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '606f63e8a4056b103d5e07ef8ed0bc68'),
  },
});
