import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import AboutUs from "./AboutUs"



const Layout = () => {
    return (
        <div className=" p-0  md:container mx-auto md:p-6">
            {/* Header Tabs */}
            <Tabs defaultValue="about" className="relative">
                <TabsList className="border-b border-gray-300 mb-6 bg-transparent justify-start rounded-none text-gray-600 w-full sm:w-[65%]">
                    <TabsTrigger
                        value="about"
                        className="bg-transparent font-interiokeys data-[state=active]:border-red rounded-none data-[state=active]:border-b-2  data-[state=active]:text-xl data-[state=active]:shadow-none shadow-none text-gray-600 data-[state=active]:text-red"
                    >
                        About Us
                    </TabsTrigger>
                    <TabsTrigger
                        value="properties"
                        className="bg-transparent font-interiokeys data-[state=active]:border-red rounded-none data-[state=active]:border-b-2 data-[state=active]:text-xl data-[state=active]:shadow-none shadow-none text-gray-600 data-[state=active]:text-red"
                    >
                        Properties Created
                    </TabsTrigger>
                    <TabsTrigger
                        value="reviews"
                        className="bg-transparent font-interiokeys data-[state=active]:border-red rounded-none data-[state=active]:border-b-2 data-[state=active]:text-xl data-[state=active]:shadow-none shadow-none text-gray-600 data-[state=active]:text-red"
                    >
                        Reviews & Ratings
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="about">
                    <AboutUs />
                </TabsContent>
                {/* <TabsContent value="properties">

        </TabsContent>
        <TabsContent value="reviews">

        </TabsContent> */}
            </Tabs>

            {/* Main Content */}
        </div>)
}

export default Layout