import { Wrapper, Container } from "@/components";
import Link from "next/link";

const SignUpPage = () => {
    return (
        <Wrapper>
            <Container>
                <div className="flex items-center justify-center min-h-screen py-12">
                    <div className="w-full max-w-md space-y-6">
                        <div className="text-center">
                            <h1 className="text-3xl font-bold">Join Collabuzz</h1>
                            <p className="text-muted-foreground mt-2">Create your account and start connecting</p>
                        </div>
                        <div className="bg-muted/30 rounded-lg p-8 text-center">
                            <p className="text-muted-foreground mb-4">
                                Registration is coming soon!
                            </p>
                            <Link 
                                href="/" 
                                className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                            >
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </Wrapper>
    );
};

export default SignUpPage;
