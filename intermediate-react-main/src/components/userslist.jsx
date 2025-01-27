export default function UsersList(props) {
    const { userslist } = props;

    return (
        <div className="w-3/4 mx-auto">
            <h1 className="text-4xl text-white">Users List</h1>
            <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
                {userslist.length > 0 ? (
                    userslist.map((user, index) => (
                        <figure key={index} className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
                            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    {user.firstName} {user.middleName} {user.lastName}
                                </h3>
                                <p className="my-4">{user.email}</p>
                            </blockquote>
                            <figcaption className="flex items-center justify-center">
                                <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                                    <div>{user.password}</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">new user</div>
                                </div>
                            </figcaption>
                        </figure>
                    ))
                ) : (
                    <p className="text-gray-500 dark:text-gray-400">No users registered yet.</p>
                )}
            </div>
        </div>
    );
}