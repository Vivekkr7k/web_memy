import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SignUp = () => {
  const [selectedUserType, setSelectedUserType] = useState('option1'); // Default to 'Individual'

  const handleUserTypeChange = (event) => {
    setSelectedUserType(event.target.value);
  };

  return (
    <div>
      <section className="p-6 dark:bg-lightback text-white">
        <form noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium text-xl">Personal Information</p>
              <p className="text-xs">Please enter your personal details</p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              {/* Other personal information fields */}
              <div className="col-span-3">
                <label htmlFor="userType" className="text-sm">Sign Up As</label>
                <select
                  id="userType"
                  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900 text-black"
                  value={selectedUserType}
                  onChange={handleUserTypeChange}
                >
                  <option value="option1">Individual</option>
                  <option value="option2">Business</option>
                </select>
              </div>

              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">First name</label>
                <input id="firstname" type="text" placeholder="First name" className="w-full py-2 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900 text-black" />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="lastname" className="text-sm">Last name</label>
                <input id="lastname" type="text" placeholder="Last name" className="w-full py-2 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900 text-black" />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm">Email</label>
                <input id="email" type="email" placeholder="Email" className="w-full py-2 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900 text-black" />
              </div>
              <div className="col-span-3">
                <label htmlFor="address" className="text-sm">DOB</label>
                <input id="address" type="date" placeholder="" className="w-full py-2 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900 text-black" />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="referralCode" className="text-sm">Referral Code "Optional"</label>
                <input id="referralCode" type="text" placeholder="" className="w-full py-2 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900 text-black" />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="zip" className="text-sm">ZIP / Postal</label>
                <input id="zip" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900 text-black" />
              </div>
            </div>
          </fieldset>

          <AnimatePresence>
            {selectedUserType === 'option2' && (
              <motion.fieldset
                className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="space-y-2 col-span-full lg:col-span-1">
                  <p className="font-medium text-xl">Business info</p>
                  <p className="text-xs">Please enter your business details</p>
                </div>
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                  {/* Business profile fields */}
                  <div className="col-span-full sm:col-span-3">
                    <label htmlFor="businessName" className="text-sm">Business/Company Name</label>
                    <input id="businessName" type="text" placeholder="Company name/Business name" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900 text-black" />
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label htmlFor="gstin" className="text-sm">GSTIN</label>
                    <input id="gstin" type="number" placeholder="" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900 text-black" />
                  </div>
                  <div className="col-span-full sm:col-span-6">
                    <label htmlFor="companyAddress" className="text-sm">Company Registered Address</label>
                    <input id="companyAddress" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900 text-black" />
                  </div>
                </div>
              </motion.fieldset>
            )}
          </AnimatePresence>
        </form>
        <div>
          <button type="button" className="w-32 px-8 py-3 font-semibold rounded-md bg-blue-900 dark:bg-violet-400 dark:text-gray-900 hover:shadow-md transition-all duration-300 ease-in-out hover:shadow-blue-500">Sign Up</button>
        </div>
      </section>
    </div>
  );
}

export default SignUp;
