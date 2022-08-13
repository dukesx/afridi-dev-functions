import { HttpException, Injectable } from '@nestjs/common';
import { StreamChat } from 'stream-chat';

@Injectable()
export class UploadChatCredentialsService {
  async uploadCredentials() {
    const creds = JSON.stringify({
      type: 'service_account',
      project_id: 'fitlive-12e54',
      private_key_id: 'e585af6f0066a9a018076f96d9eb63ea033afe98',
      private_key:
        '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC86MbGlnsklZzF\nQHXVxAAsuddsLavESeLWe93q1Y4USHnfgFSHe+bGNw3m+OTM5AiPABbQKYyXZioj\neky3Il/M6fvV0Ze67Pqlw2hnr1ChboU2hUF0U1k7IdCoHEOFSHtBSQocxbpJN0u9\nlGKScJOGKvAdeP8kHuITnL4uJTh3adKiSOzn98UNrkE5zTuGEN6dsBWwjsOo/1j6\ng+2XpRZPO1hcA4yfX29boHRNo9Grvne5I0+3XI8mbOpGubijvsZr18nm5GP8UXWx\nwjZIlkaqpzHCTP7tEM/qf9E1+dfjd3oodcf/1INo9sBidVjSR2ViO1JbOyQlPDGF\nmGdOPxZPAgMBAAECggEAD9OGl6uSvIFmRWY9mP+XLigRoqf+3G5+OQ7ejCaBBTT/\nNNjI/CLGtjN1kDSo4nt2NhjBUIYyl5qBDEDaPXt9QCsYJJUvG4NwCkQhMpKO9D9Q\nnL00Ox0ifCA8nWDkzT1ByjnmxXtRPIIL7+GHEpKo4VQmkqmI4otN0GvQyQfoP6Sy\nhLNeoAOHM+UCxa6/1oHRJE40pCotZ/z0BXWgwjE9lr8w2NGWcJVXLs+SLDVSTACa\ne/MohDRD8zKkWenPPrClqkcmn0m6tBy3I9G2lZxXz6IZTIs8tgJ2kC8Dbu9WdC82\nmi1hWDo0my0yatTj0JHktkC4qoJPkgyq3PJekcUvKQKBgQDsvNtrQnTEDphBW61O\nn9kOAZr6MDEqvKt/vTCd7NZHT3k/vSHsP9dyHhwZboihbSP15KkkBIvwY5w29ngR\nAZRgwptsGGafW+mjsktax/G6m/smn4m1VFeLxPbLxFd85mBs5Gxf1ew+ZF8VFTf+\njBn9WK7VEtECFm+FOaI3UwXeZwKBgQDMR6yHks682yyJDj3hsnS5jCS6yCef3Nqw\nxbMSIRkYEASCsb6fIS3fQLL1Wox9R2WuNyeND1q4GpuRXgDuOaiS5EvT3dCZe0uH\nprH70pFpKKuUlSJ8YlOMVxJgQBrRoJ93UloLpxiDDy+Mhvi8VJkxSqRLtW1erZi2\nYswtOVFH2QKBgQCGnXVfbnCbM3lcYNcRiE+SaVNIxLKQjKwwfNHyW0QVVJmrps5t\nWngWCg0MYRAMStVR825CbttsHBguIMRxVyaaRs6+Drn8D/WxAadbvao05JFRixJx\nK76EWcHEaKce/JkEEneVnz0w1T5D7MbkVaJJr23q90ImH7/WT8lwECOcLQKBgG4Y\nnvK+e6+rTFhdlZpjbKdn0Y/dOgXdqPumwXke34BpeZTaqQrofemZ3BmCAL+wUCvR\ny/4pbVJV/Mwe5s99wc3RPtDj9n4RxkZI4BoBhZ8wbTD6I4j4EWFMuDmpswqR0AAm\nISOwnfRcpdrOD5ao3ZuESAIJuPVTCEAcBUDGaHkZAoGAFF1Ihq9KgKI3OQRsZHrv\n9xEJz2a8etBAk03ynhMQ/dRhwt26hWBiTRCD7Odhk+J6tNkXLaGO/5oVop7wzKMa\n6W6Dd1BXHOYg6UIgVWkVO3SaMpfU1XKWhMvjhev99Z98nlLV/xSf22+yYrhPjtAx\nV8zja2yZM+i4n9dWg3Zq/9I=\n-----END PRIVATE KEY-----\n',
      client_email:
        'firebase-adminsdk-sh3gi@fitlive-12e54.iam.gserviceaccount.com',
      client_id: '108259288263453037975',
      auth_uri: 'https://accounts.google.com/o/oauth2/auth',
      token_uri: 'https://oauth2.googleapis.com/token',
      auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
      client_x509_cert_url:
        'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-sh3gi%40fitlive-12e54.iam.gserviceaccount.com',
    });
    const client = StreamChat.getInstance(
      'gd2u6sewfhqu',
      'd2ntq3qr8b7qrrjusrpkx9g85gbzuxe7xmx2968w2d43pbw4pqgmxuapjn6u3cn2',
    );

    try {
      await client.updateAppSettings({
        push_config: {
          version: 'v2',
        },
        firebase_config: {
          credentials_json: creds,
        },
      });

      return JSON.stringify({ success: true });
    } catch (e) {
      console.log(e);
      throw new HttpException('Error Uploading', 500);
    }
  }
}
