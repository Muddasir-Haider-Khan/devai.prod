import React from 'react';

interface Props {
    children: React.ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
    return (
    <div className="flex flex-col min-h-screen w-full">
            <main className="flex flex-col lg:flex-row flex-1 size-full">
                <div className="w-full pt-14 lg:ml-72">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;