import ExpressServer from './config/express';
import AuthRouting from './src/auth/api/route/auth.routing';
import PollRouting from './src/poll/api/routes/poll.routing';
import UserRouting from './src/user/api/routes/user.routing';
import VoteRouting from './src/vote/api/routes/vote.routing';

const app = ExpressServer();
app.use(AuthRouting());
app.use(PollRouting());
app.use(UserRouting());
app.use(VoteRouting());
