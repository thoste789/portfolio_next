export default function Container({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full md:w-full relative z-10 lg:container mx-auto px-2 md:px-6">
            {children}
        </div>
    );
}