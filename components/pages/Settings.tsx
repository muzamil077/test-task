import { User, Bell, Shield, Palette, Database } from 'lucide-react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

export default function Settings() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-1">Manage your account and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Settings */}
        <Card>
          <div className="flex items-center gap-3 mb-4">
            <User size={20} className="text-primary-600" />
            <h3 className="text-lg font-semibold text-gray-900">Profile</h3>
          </div>
          <div className="space-y-4">
            <Input label="Full Name" placeholder="Enter your full name" />
            <Input label="Email" type="email" placeholder="Enter your email" />
            <Input label="Phone" placeholder="Enter your phone number" />
            <Button className="w-full">Update Profile</Button>
          </div>
        </Card>

        {/* Notification Settings */}
        <Card>
          <div className="flex items-center gap-3 mb-4">
            <Bell size={20} className="text-primary-600" />
            <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Email Notifications</span>
              <input type="checkbox" className="rounded" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">SMS Notifications</span>
              <input type="checkbox" className="rounded" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Push Notifications</span>
              <input type="checkbox" className="rounded" defaultChecked />
            </div>
            <Button variant="outline" className="w-full">Save Preferences</Button>
          </div>
        </Card>

        {/* Security Settings */}
        <Card>
          <div className="flex items-center gap-3 mb-4">
            <Shield size={20} className="text-primary-600" />
            <h3 className="text-lg font-semibold text-gray-900">Security</h3>
          </div>
          <div className="space-y-4">
            <Input label="Current Password" type="password" placeholder="Enter current password" />
            <Input label="New Password" type="password" placeholder="Enter new password" />
            <Input label="Confirm Password" type="password" placeholder="Confirm new password" />
            <Button variant="outline" className="w-full">Change Password</Button>
          </div>
        </Card>
      </div>

      {/* Additional Settings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <Card>
          <div className="flex items-center gap-3 mb-4">
            <Palette size={20} className="text-primary-600" />
            <h3 className="text-lg font-semibold text-gray-900">Appearance</h3>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Theme</label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm">
                <option>Light</option>
                <option>Dark</option>
                <option>System</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm">
                <option>English</option>
                <option>Hebrew</option>
                <option>Arabic</option>
              </select>
            </div>
            <Button variant="outline" className="w-full">Save Settings</Button>
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-3 mb-4">
            <Database size={20} className="text-primary-600" />
            <h3 className="text-lg font-semibold text-gray-900">Data & Privacy</h3>
          </div>
          <div className="space-y-4">
            <Button variant="outline" className="w-full">Export Data</Button>
            <Button variant="outline" className="w-full">Download Reports</Button>
            <Button variant="outline" className="w-full text-red-600 hover:text-red-700">Delete Account</Button>
          </div>
        </Card>
      </div>
    </div>
  )
} 