import { View, Text, Button } from 'react-native'
import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../../../firebase'
import { useAuthentication } from '../../utils/hooks/useAuthentication'

const UserInfoScreen = () => {
    const { user } = useAuthentication()
    return (
        <View>
            <Text>{user?.email}</Text>

            <Button title="Sign Out" onPress={() => signOut(auth)} />
        </View>
    )
}

export default UserInfoScreen