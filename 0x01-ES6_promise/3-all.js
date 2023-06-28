/* promise */
import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  Promise.allSettled([uploadPhoto(), createUser()])
    .then((results) => {
      const fulfilledResponses = results.filter((result) => result.status === 'fulfilled');
      const rejectedResponses = results.filter((result) => result.status === 'rejected');

      if (fulfilledResponses.length > 0) {
        const userResponse = fulfilledResponses[1].value;
        console.log(`Body ${userResponse.firstName} ${userResponse.lastName}`);
      }

      if (rejectedResponses.length > 0) {
        console.log('Signup system offline');
      }
    });
}

export default handleProfileSignup;
