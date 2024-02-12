

const dashboard = async(req, res) => {
    const userRole = req.user.role;
    if(userRole === 'Admin') {
        res.redirect('/dashboard/admin')

    }
    else {
        res.redirect('/dashboard/user')
    }
}

const adminDashboard = async() => {
    if (req.user.role !== 'Admin') return res.sendStaus(403)
    res.send('welcome to admin dashboard')
}

const userDashboard = async(req, res) => {
    res.send('Welcome to user dashboard')
}