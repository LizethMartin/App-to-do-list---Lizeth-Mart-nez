const AlertError = ({children}) => {
    return (
        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md relative mb-4" role="alert">
            <p class="font-semibold text-center">{children}</p>
        </div>
    );
};

export default AlertError;