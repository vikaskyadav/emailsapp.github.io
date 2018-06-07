import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});


const data = [
	{
		"name": 'AQL Mail',
		"owner": 'AQL Inc.',
		"location": '',
		"released": '1993, Mar',
		"cost": 'Free (Ad)',
		"mailboxStorage": 'Unknown',
		"max-attachment-limit": '25MB',
		"supportedLanguages": '54',
		"POP3-support": 'Yes',
		"IMAP-support": 'Yes',
		"SMTP-support": 'Yes',
		"cryptographicProtocol": 'SSL',
		"account-expiration": '90 days (Deactivation), 180 days (Deletion)',
		"own-domain": '',
		"torGatewayAvailable": "No",
		"tor-browser-allowed": "Unknown",
		"proxy-gateway-available": "Unknown"
	},
	{
		"name": 'FastMail',
		"owner": 'Fastmail Pty Ltd',
		"location": 'Australia (servers are in US)',
		"released": '1999, Jan',
		"cost": '$30/year to $90/year',
		"mailboxStorage": '2GB to 100GB',
		"max-attachment-limit": '50 MB',
		"supportedLanguages": '37',
		"POP3-support": 'Yes',
		"IMAP-support": 'Yes',
		"SMTP-support": 'Yes',
		"cryptographicProtocol": 'SSL, TLS',
		"account-expiration": 'After subscription expiry',
		"own-domain": 'Yes, Standard and Professional plans',
		"torGatewayAvailable": "No",
		"tor-browser-allowed": "Unknown",
		"proxy-gateway-available": "Yes"
	},
	{
		"name": 'Gmail',
		"owner": 'Google LLC',
		"location": '',
		"released": '2004, Apr',
		"cost": 'Free (Ad)',
		"mailboxStorage": '15 GB',
		"max-attachment-limit": '5 MB',
		"supportedLanguages": '71',
		"POP3-support": 'Yes',
		"IMAP-support": 'Yes',
		"SMTP-support": 'Yes',
		"cryptographicProtocol": 'SSL, TLS',
		"account-expiration": '9 months',
		"own-domain": 'Yes, for $5/user/month option only',
		"torGatewayAvailable": "No",
		"tor-browser-allowed": "No",
		"proxy-gateway-available": "No"
	},
	{
		"name": 'GMX Mail',
		"owner": 'United Internet AG',
		"location": 'Germany',
		"released": '1997, Jan',
		"cost": 'Free (Ad)',
		"mailboxStorage": '2 GB (free)',
		"max-attachment-limit": '20 MB (free), 50-100 MB (paid)',
		"supportedLanguages": 'German',
		"POP3-support": 'Yes',
		"IMAP-support": 'Paid',
		"SMTP-support": 'Yes',
		"cryptographicProtocol": 'Yes',
		"account-expiration": '6 months or if payment stopped',
		"own-domain": '',
		"torGatewayAvailable": "No",
		"tor-browser-allowed": "No",
		"proxy-gateway-available": "Unknown"
	},
	{
		"name": 'Hushmail',
		"owner": 'Hush Communications Ltd.',
		"location": 'Canada',
		"released": '1999, May',
		"cost": 'Free 14-day trial $49.98 year (Premium)',
		"mailboxStorage": '10 GB (Premium)',
		"max-attachment-limit": '20 MB per file, total 50 MB per mail',
		"supportedLanguages": 'English',
		"POP3-support": 'Paid',
		"IMAP-support": 'Paid',
		"SMTP-support": 'Paid',
		"cryptographicProtocol": 'SSL, TLS, OpenPGP',
		"account-expiration": '3 weeks (Free); Until payment ends',
		"own-domain": 'Yes',
		"torGatewayAvailable": "No",
		"tor-browser-allowed": "Unknown",
		"proxy-gateway-available": "Unknown"
	},
	{
		"name": 'iCloud',
		"owner": 'Apple Inc.',
		"location": '',
		"released": '2011, Oct',
		"cost": '0$ or $0.99/month, $2.99/month, or $9.99/month',
		"mailboxStorage": '5 GB (Free), 50 GB, 200 GB, or 2 TB monthly',
		"max-attachment-limit": '20 MB',
		"supportedLanguages": '4',
		"POP3-support": 'No',
		"IMAP-support": 'Requires phone number for mandatory',
		"SMTP-support": 'Requires phone number for mandatory 2FA',
		"cryptographicProtocol": 'SSL, TLS',
		"account-expiration": 'Never',
		"own-domain": '',
		"torGatewayAvailable": "No",
		"tor-browser-allowed": "Unknown",
		"proxy-gateway-available": "Unknown"
	},
	{
		"name": 'Lycos',
		"owner": 'Lycos, Inc.',
		"location": '',
		"released": '1995, Jan',
		"cost": 'Free (Ad) and limited to some countries. Premium: $19.95 yearly',
		"mailboxStorage": 'Free 500MB since Oct 2016, previously 3 GB<br>Premium 5 GB',
		"max-attachment-limit": '35 MB',
		"supportedLanguages": 'English',
		"POP3-support": 'Plus only',
		"IMAP-support": 'Plus only',
		"SMTP-support": 'Plus only',
		"cryptographicProtocol": 'SSL',
		"account-expiration": '1 month',
		"own-domain": '',
		"torGatewayAvailable": "No",
		"tor-browser-allowed": "Unknown",
		"proxy-gateway-available": "Unknown"
	},
	{
		"name": 'Mail.com',
		"owner": 'United Internet AG',
		"location": '',
		"released": '1995',
		"cost": 'Free (Ad) or $3.95/month or $19.95/year',
		"mailboxStorage": 'Unlimited',
		"max-attachment-limit": '50 MB',
		"supportedLanguages": '3',
		"POP3-support": 'Paid only',
		"IMAP-support": 'Paid only',
		"SMTP-support": 'Paid only',
		"cryptographicProtocol": 'SSL',
		"account-expiration": '6 months (Free)',
		"own-domain": '',
		"torGatewayAvailable": "No",
		"tor-browser-allowed": "No",
		"proxy-gateway-available": "Unknown"
	},
	{
		"name": 'Mail.ru',
		"owner": 'Mail.ru',
		"location": 'Russia',
		"released": '1998, Jan',
		"cost": 'Free (Ad) or paid options',
		"mailboxStorage": 'Unlimited',
		"max-attachment-limit": '50 MB',
		"supportedLanguages": '11',
		"POP3-support": 'Yes',
		"IMAP-support": 'yes',
		"SMTP-support": 'Yes',
		"cryptographicProtocol": 'SSL, TLS',
		"account-expiration": '6 months (Free); Until payment ends',
		"own-domain": 'Yes',
		"torGatewayAvailable": "No",
		"tor-browser-allowed": "Unknown",
		"proxy-gateway-available": "Unknown"
	},
	{
		"name": 'Mailfence',
		"owner": 'ContactOffice Group',
		"location": 'Belgium',
		"released": '2013, Nov',
		"cost": 'Free (No Ad). 2,50€/month (Entry). 7,50€/month (Pro)',
		"mailboxStorage": '500  MB (free)<br>5 GB (Entry) or 20 GB (Pro)',
		"max-attachment-limit": '10 MB (Free)<br> 50 (Entry/Pro)',
		"supportedLanguages": '5',
		"POP3-support": 'Paid Only',
		"IMAP-support": 'Paid Only',
		"SMTP-support": 'Paid Only',
		"cryptographicProtocol": 'SSL',
		"account-expiration": '7 months (Free);<br> Never (Paid)',
		"own-domain": 'Yes, for paying accounts',
		"torGatewayAvailable": "No",
		"tor-browser-allowed": "Yes",
		"proxy-gateway-available": "No"
	},
	{
		"name": 'Outlook.com',
		"owner": 'Microsoft',
		"location": '',
		"released": '1996, July (As Hotmail)',
		"cost": 'Free (Ad); Paid option',
		"mailboxStorage": '15 GB',
		"max-attachment-limit": '25 MB',
		"supportedLanguages": '106',
		"POP3-support": 'Yes',
		"IMAP-support": 'Yes',
		"SMTP-support": 'Yes',
		"cryptographicProtocol": 'SSL',
		"account-expiration": '270 days',
		"own-domain": 'Premium Only',
		"torGatewayAvailable": "No",
		"tor-browser-allowed": "Unknown",
		"proxy-gateway-available": "Unknown"
	},
	{
		"name": 'ProtonMail',
		"owner": 'Proton Technologies AG',
		"location": 'Switzerland',
		"released": '2013',
		"cost": 'Free (No Ad); Multi-tiered pricing',
		"mailboxStorage": '500 MB (free), 5 to 20 GB',
		"max-attachment-limit": '25 MB',
		"supportedLanguages": '10',
		"POP3-support": 'Paid Only',
		"IMAP-support": 'Paid Only',
		"SMTP-support": 'Paid Only',
		"cryptographicProtocol": 'SSL|Tor',
		"account-expiration": '3 months',
		"own-domain": 'Yes, for premium accounts',
		"torGatewayAvailable": "Yes",
		"tor-browser-allowed": "No, JS required",
		"proxy-gateway-available": "No"
	},
	{
		"name": 'Rediffmail',
		"owner": 'Rediff',
		"location": '',
		"released": '1997',
		"cost": 'Free (Ad) and Paid',
		"mailboxStorage": 'Unlimited',
		"max-attachment-limit": '25 MB',
		"supportedLanguages": '11',
		"POP3-support": 'INR 399',
		"IMAP-support": '',
		"SMTP-support": '',
		"cryptographicProtocol": 'SSL, TLS',
		"account-expiration": '2 months (Mailbox deletion), 3 months (Deactivation)',
		"own-domain": '',
		"torGatewayAvailable": "No",
		"tor-browser-allowed": "Yes",
		"proxy-gateway-available": "Unknown"
	},
	{
		"name": 'Runbox',
		"owner": 'Runbox Solutions AS',
		"location": 'Norway',
		"released": '2000',
		"cost": 'Minimum (micro plan): $19.95/year or €14.95/year',
		"mailboxStorage": '1 GB (Micro plan)',
		"max-attachment-limit": '100 MB',
		"supportedLanguages": '2',
		"POP3-support": 'yes',
		"IMAP-support": 'yes',
		"SMTP-support": 'yes',
		"cryptographicProtocol": 'SSL',
		"account-expiration": 'Until payment ends',
		"own-domain": 'yes',
		"torGatewayAvailable": "No",
		"tor-browser-allowed": "Yes",
		"proxy-gateway-available": "Unknown"
	},
	{
		"name": 'Tutanota',
		"owner": 'Tutao GmbH',
		"location": 'Germany',
		"released": '2011',
		"cost": 'Free (No Ad), €12 year (Premium)',
		"mailboxStorage": '1 GB',
		"max-attachment-limit": '25 MB',
		"supportedLanguages": '30',
		"POP3-support": 'No',
		"IMAP-support": 'No',
		"SMTP-support": 'No',
		"cryptographicProtocol": 'SSL',
		"account-expiration": 'Never',
		"own-domain": 'For premium accounts',
		"torGatewayAvailable": "No",
		"tor-browser-allowed": "No, JS required",
		"proxy-gateway-available": "No"
	},
	{
		"name": 'Yahoo! Mail',
		"owner": 'Yahoo!',
		"location": '',
		"released": '1997, Oct',
		"cost": 'Free (Ad), Yahoo! Mail Plus $49.99',
		"mailboxStorage": '1 TB',
		"max-attachment-limit": '25 MB',
		"supportedLanguages": '27',
		"POP3-support": 'Most countries',
		"IMAP-support": 'Yes',
		"SMTP-support": 'Yes',
		"cryptographicProtocol": 'SSL',
		"account-expiration": '12 months',
		"own-domain": '',
		"torGatewayAvailable": "No",
		"tor-browser-allowed": "Unknown",
		"proxy-gateway-available": "Unknown"
	},
	{
		"name": 'Yandex Mail',
		"owner": 'Yandex LLC',
		"location": '',
		"released": '2000, June',
		"cost": 'Free (Ad)',
		"mailboxStorage": 'Unlimited',
		"max-attachment-limit": '22 MB per file, total 30 MB per mail',
		"supportedLanguages": '10',
		"POP3-support": 'Yes',
		"IMAP-support": 'Yes',
		"SMTP-support": 'Yes',
		"cryptographicProtocol": 'SSL, TLS',
		"account-expiration": '24 months',
		"own-domain": 'Yes',
		"torGatewayAvailable": "No",
		"tor-browser-allowed": "Yes",
		"proxy-gateway-available": "Unknown"
	},
	{
		"name": 'Zoho',
		"owner": 'ZOHO Corporation',
		"location": '',
		"released": '2008, Oct',
		"cost": 'Personal Free (No Ad); Premium options $24 to $99/user yearly',
		"mailboxStorage": '5 GB "Lite"."Standard": 10 & 15 GB',
		"max-attachment-limit": '20MB free, 30 or 50 MB paid',
		"supportedLanguages": '16',
		"POP3-support": 'Paid Only',
		"IMAP-support": 'Paid Only',
		"SMTP-support": 'Paid Only',
		"cryptographicProtocol": 'SSL',
		"account-expiration": '4 months (Free); Until payment ends',
		"own-domain": 'Yes (free up to 25 users)',
		"torGatewayAvailable": "No",
		"tor-browser-allowed": "Unknown",
		"proxy-gateway-available": "Unknown"
	}
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Owner</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Released</TableCell>
            <TableCell>Cost</TableCell>
            <TableCell>Mailbox Storage</TableCell>
            <TableCell>Cryptographic Protocol</TableCell>
            <TableCell>Tor Gateway</TableCell>
            <TableCell >Supported Languages</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell component="th" scope="row">
                  {n.name}
                </TableCell>
                <TableCell >{n.owner}</TableCell>
                <TableCell >{n.location}</TableCell>
                <TableCell >{n.released}</TableCell>
                <TableCell >{n.cost}</TableCell>
                <TableCell >{n.mailboxStorage}</TableCell>
                <TableCell >{n.cryptographicProtocol}</TableCell>
                <TableCell >{n.torGatewayAvailable}</TableCell>
                <TableCell >{n.supportedLanguages}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleTable);
