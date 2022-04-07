module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1cfd0091e5b64ce8c37ec337931a58c8'),
  },
});
