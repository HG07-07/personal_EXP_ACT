import type { Metadata } from "next"
import SettingsHeader from "@/components/settings/settings-header"
import ProfileSettings from "@/components/settings/profile-settings"
import NotificationSettings from "@/components/settings/notification-settings"
import AccountSettings from "@/components/settings/account-settings"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Settings | ExpenseEase",
  description: "Manage your account settings and preferences",
}

export default function SettingsPage() {
  return (
    <main className="flex-1 p-6">
      <SettingsHeader />
      <div className="mt-6 max-w-4xl mx-auto">
        <Tabs defaultValue="profile">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="account">Account</TabsTrigger>
          </TabsList>
          <TabsContent value="profile" className="mt-6">
            <ProfileSettings />
          </TabsContent>
          <TabsContent value="notifications" className="mt-6">
            <NotificationSettings />
          </TabsContent>
          <TabsContent value="account" className="mt-6">
            <AccountSettings />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}

