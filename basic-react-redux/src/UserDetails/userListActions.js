export const userClicked = (user) => {
    console.log('clicked', user.name);
    return {
        type: 'USER_CLICKED',
        payload: user
    }
}