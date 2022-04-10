import expressServer from './config/express';
import authRouting from './src/auth/api/route/auth.routing';
import pollRouting from './src/poll/api/routes/poll.routing';
import userRouting from './src/user/api/routes/user.routing';
import voteRouting from './src/vote/api/routes/vote.routing';

const app = expressServer();
app.use(authRouting());
app.use(pollRouting());
app.use(userRouting());
app.use(voteRouting());
