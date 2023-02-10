import PropTypes from 'prop-types';
import { ProfileContainer, Description, Stats, Avatar, Name, Tag, Location, Label, Quantity, StatElement } from './Profile.styled';

const Profile = ({ userInfo }) => {
    const { avatar, username, tag, location, stats } = userInfo
    return (
        <ProfileContainer>
            <Description>
                <Avatar src={avatar} alt={username}/>
                <Name>{username}</Name>
                <Tag>@{tag}</Tag>
                <Location>{location}</Location>
            </Description>
            <Stats>
                <StatElement key={stats.followers}>
                    <Label>Followers</Label>
                    <Quantity>{stats.followers}</Quantity>
                </StatElement>
                <StatElement key={stats.views}>
                    <Label>Views</Label>
                    <Quantity>{stats.views}</Quantity>
                </StatElement>
                <StatElement key={stats.likes}>
                    <Label>Likes</Label>
                    <Quantity>{stats.likes}</Quantity>
                </StatElement>
            </Stats>
        </ProfileContainer>
    )
}

Profile.propTypes = {
    userInfo: PropTypes.exact({
        avatar: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        stats: PropTypes.exact({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired,
        })
    })
}

export default Profile

