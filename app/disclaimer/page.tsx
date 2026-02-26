export default function Disclaimer() {
    return (
        <main className="min-h-screen bg-white pt-32 pb-20">
            <div className="container mx-auto px-6 max-w-4xl">
                <h1 className="section-title mb-12">Disclaimer</h1>

                <div className="prose prose-lg text-gray-600 space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-primary mb-4">General Information</h2>
                        <p>
                            The information provided on this website is for general informational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, or suitability of the website or the information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-primary mb-4">Project Details</h2>
                        <p>
                            Project specifications, images, and prices shown are indicative and subject to change without notice. These images may include artistic renderings and are for representational purposes only. Final specifications will be as per the agreement for sale between the developer and the buyer.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-primary mb-4">Professional Advice</h2>
                        <p>
                            Any reliance you place on such information is strictly at your own risk. It is recommended to verify all details independently with the developers or legal professionals before making any investment decisions.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-primary mb-4">External Links</h2>
                        <p>
                            Through this website, you may be able to link to other websites which are not under the control of HouseKey. We have no control over the nature, content, and availability of those sites.
                        </p>
                    </section>

                    <p className="text-sm italic mt-12">Last updated: February 2026</p>
                </div>
            </div>
        </main>
    );
}
