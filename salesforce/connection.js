const nforce = require('nforce');

/**
 * Creates connection to Salesforce CRM
 */

module.exports = nforce.createConnection({
  clientId: '3MVG91ftikjGaMd9U1c._02L1YsMsDaNwms4TpOz6Fj3llGobkYt3qBNm8TpZW_5HDnFIdplhERaquFTHelhj',
  clientSecret: 'B88F096AE8582AF2E4C2D4F930125A3D83CB245ABD4F601F844CC08A066D27E7',
  redirectUri: 'https://login.salesforce.com/services/oauth2/success',
  apiVersion: 'v43.0',
  mode: 'single',
  autoRefresh: true,
  username: 'rickyruhlen@gmail.com',
  password: 'Salesforce1kc9cbHQGZeXXCdyz7CJ0b4YqR',
  oauth: {
    access_token: '6Cel800D15000000Eeaw8881C0000000CNf61WWSiWYFNLX6VO0pgmhrPvS3DL9pSuFWocp3xxjnTiwB0t2Y5HvsG8QKVAhEd2P5dAblhG5',
    instance_url: 'https://ruhlen-dev-ed.my.salesforce.com'
  },
});
