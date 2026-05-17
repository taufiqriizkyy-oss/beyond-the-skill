'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export default function ApplicationForm() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [formData, setFormData] = useState({
    athleteName: '',
    parentName: '',
    athleteAge: '',
    currentLevel: '',
    currentGym: '',
    yearsOfTraining: '',
    mainFocus: [],
    improvementGoals: '',
    programInterest: '',
    preferredTraining: '',
    whatsappNumber: '',
    instagramUsername: ''
  })

  const [errors, setErrors] = useState({})

  const focusOptions = [
    'Execution Refinement',
    'Artistry',
    'Flexibility',
    'Confidence',
    'Competition Preparation',
    'Skill Consistency',
    'Advanced Development'
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleCheckboxChange = (option) => {
    setFormData(prev => ({
      ...prev,
      mainFocus: prev.mainFocus.includes(option)
        ? prev.mainFocus.filter(item => item !== option)
        : [...prev.mainFocus, option]
    }))
    if (errors.mainFocus) {
      setErrors(prev => ({ ...prev, mainFocus: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.athleteName.trim()) newErrors.athleteName = 'Athlete name is required'
    if (!formData.athleteAge) newErrors.athleteAge = 'Age is required'
    if (!formData.currentLevel) newErrors.currentLevel = 'Please select current level'
    if (!formData.currentGym.trim()) newErrors.currentGym = 'Current gym/club is required'
    if (!formData.yearsOfTraining) newErrors.yearsOfTraining = 'Please select years of training'
    if (formData.mainFocus.length === 0) newErrors.mainFocus = 'Please select at least one focus area'
    if (!formData.improvementGoals.trim()) newErrors.improvementGoals = 'Please share your goals'
    if (!formData.programInterest) newErrors.programInterest = 'Please select program interest'
    if (!formData.preferredTraining) newErrors.preferredTraining = 'Please select training type'
    if (!formData.whatsappNumber.trim()) newErrors.whatsappNumber = 'WhatsApp number is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const generateWhatsAppMessage = () => {
    const message = `Hello Coach Rifda,

I have completed the Beyond The Skill application form.

*Athlete Information:*
Name: ${formData.athleteName}
${formData.parentName ? `Parent: ${formData.parentName}` : ''}
Age: ${formData.athleteAge} years old
Current Level: ${formData.currentLevel}
Current Gym/Club: ${formData.currentGym}
Training Experience: ${formData.yearsOfTraining}

*Training Focus:*
${formData.mainFocus.join(', ')}

*Program Interest:*
${formData.programInterest}

*Preferred Training Type:*
${formData.preferredTraining}

*Improvement Goals:*
${formData.improvementGoals}

*Contact:*
WhatsApp: ${formData.whatsappNumber}
${formData.instagramUsername ? `Instagram: @${formData.instagramUsername}` : ''}

Looking forward to learning more about the program.

Best regards,
${formData.athleteName}`

    return encodeURIComponent(message)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      const whatsappMessage = generateWhatsAppMessage()
      const whatsappURL = `https://wa.me/6285943776945?text=${whatsappMessage}`
      window.open(whatsappURL, '_blank')
    } else {
      // Scroll to first error
      const firstError = Object.keys(errors)[0]
      const element = document.querySelector(`[name="${firstError}"]`)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' })
        element.focus()
      }
    }
  }

  return (
    <section id="contact" ref={ref} className="relative min-h-screen bg-brand-black py-24 md:py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-red/20 blur-[150px] rounded-full"
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-6 py-2 border border-brand-red/50 text-brand-red text-xs tracking-[0.3em] uppercase mb-8">
            Elite Application
          </span>
          
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-brand-offwhite mb-6 leading-tight">
            START YOUR<br />
            <span className="text-brand-red">REFINEMENT JOURNEY</span>
          </h2>
          
          <p className="text-brand-gray text-lg md:text-xl font-light max-w-2xl mx-auto">
            Apply for personalized Olympic-level refinement training.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-8"
        >
          {/* Athlete Name */}
          <div className="space-y-2">
            <label className="block text-brand-offwhite/90 text-sm uppercase tracking-widest font-light">
              Athlete Full Name *
            </label>
            <input
              type="text"
              name="athleteName"
              value={formData.athleteName}
              onChange={handleInputChange}
              className={`w-full bg-transparent border ${errors.athleteName ? 'border-brand-red' : 'border-brand-offwhite/20'} focus:border-brand-red px-6 py-4 text-brand-offwhite text-lg transition-all duration-300 focus:outline-none focus:shadow-[0_0_20px_rgba(239,6,6,0.3)]`}
              placeholder="Enter athlete's full name"
            />
            {errors.athleteName && (
              <p className="text-brand-red text-xs mt-1">{errors.athleteName}</p>
            )}
          </div>

          {/* Parent Name */}
          <div className="space-y-2">
            <label className="block text-brand-offwhite/90 text-sm uppercase tracking-widest font-light">
              Parent Name <span className="text-brand-gray text-xs normal-case">(Optional)</span>
            </label>
            <input
              type="text"
              name="parentName"
              value={formData.parentName}
              onChange={handleInputChange}
              className="w-full bg-transparent border border-brand-offwhite/20 focus:border-brand-red px-6 py-4 text-brand-offwhite text-lg transition-all duration-300 focus:outline-none focus:shadow-[0_0_20px_rgba(239,6,6,0.3)]"
              placeholder="Enter parent's name"
            />
          </div>

          {/* Athlete Age */}
          <div className="space-y-2">
            <label className="block text-brand-offwhite/90 text-sm uppercase tracking-widest font-light">
              Athlete Age *
            </label>
            <input
              type="number"
              name="athleteAge"
              value={formData.athleteAge}
              onChange={handleInputChange}
              min="1"
              max="99"
              className={`w-full bg-transparent border ${errors.athleteAge ? 'border-brand-red' : 'border-brand-offwhite/20'} focus:border-brand-red px-6 py-4 text-brand-offwhite text-lg transition-all duration-300 focus:outline-none focus:shadow-[0_0_20px_rgba(239,6,6,0.3)]`}
              placeholder="Enter age"
            />
            {errors.athleteAge && (
              <p className="text-brand-red text-xs mt-1">{errors.athleteAge}</p>
            )}
          </div>

          {/* Current Level */}
          <div className="space-y-2">
            <label className="block text-brand-offwhite/90 text-sm uppercase tracking-widest font-light">
              Current Level *
            </label>
            <select
              name="currentLevel"
              value={formData.currentLevel}
              onChange={handleInputChange}
              className={`w-full bg-brand-black border ${errors.currentLevel ? 'border-brand-red' : 'border-brand-offwhite/20'} focus:border-brand-red px-6 py-4 text-brand-offwhite text-lg transition-all duration-300 focus:outline-none focus:shadow-[0_0_20px_rgba(239,6,6,0.3)] cursor-pointer`}
            >
              <option value="" className="bg-brand-black">Select level</option>
              <option value="Beginner" className="bg-brand-black">Beginner</option>
              <option value="Intermediate" className="bg-brand-black">Intermediate</option>
              <option value="Competitive" className="bg-brand-black">Competitive</option>
              <option value="Advanced" className="bg-brand-black">Advanced</option>
              <option value="Elite" className="bg-brand-black">Elite</option>
            </select>
            {errors.currentLevel && (
              <p className="text-brand-red text-xs mt-1">{errors.currentLevel}</p>
            )}
          </div>

          {/* Current Gym */}
          <div className="space-y-2">
            <label className="block text-brand-offwhite/90 text-sm uppercase tracking-widest font-light">
              Current Gym / Club *
            </label>
            <input
              type="text"
              name="currentGym"
              value={formData.currentGym}
              onChange={handleInputChange}
              className={`w-full bg-transparent border ${errors.currentGym ? 'border-brand-red' : 'border-brand-offwhite/20'} focus:border-brand-red px-6 py-4 text-brand-offwhite text-lg transition-all duration-300 focus:outline-none focus:shadow-[0_0_20px_rgba(239,6,6,0.3)]`}
              placeholder="Enter current gym or club"
            />
            {errors.currentGym && (
              <p className="text-brand-red text-xs mt-1">{errors.currentGym}</p>
            )}
          </div>

          {/* Years of Training */}
          <div className="space-y-2">
            <label className="block text-brand-offwhite/90 text-sm uppercase tracking-widest font-light">
              Years of Training *
            </label>
            <select
              name="yearsOfTraining"
              value={formData.yearsOfTraining}
              onChange={handleInputChange}
              className={`w-full bg-brand-black border ${errors.yearsOfTraining ? 'border-brand-red' : 'border-brand-offwhite/20'} focus:border-brand-red px-6 py-4 text-brand-offwhite text-lg transition-all duration-300 focus:outline-none focus:shadow-[0_0_20px_rgba(239,6,6,0.3)] cursor-pointer`}
            >
              <option value="" className="bg-brand-black">Select experience</option>
              <option value="Less than 1 year" className="bg-brand-black">Less than 1 year</option>
              <option value="1–3 years" className="bg-brand-black">1–3 years</option>
              <option value="3–5 years" className="bg-brand-black">3–5 years</option>
              <option value="5+ years" className="bg-brand-black">5+ years</option>
            </select>
            {errors.yearsOfTraining && (
              <p className="text-brand-red text-xs mt-1">{errors.yearsOfTraining}</p>
            )}
          </div>

          {/* Main Focus - Checkboxes */}
          <div className="space-y-4">
            <label className="block text-brand-offwhite/90 text-sm uppercase tracking-widest font-light">
              Main Focus * <span className="text-brand-gray text-xs normal-case">(Select all that apply)</span>
            </label>
            <div className="grid md:grid-cols-2 gap-4">
              {focusOptions.map((option) => (
                <label
                  key={option}
                  className={`flex items-center gap-3 px-4 py-3 border ${formData.mainFocus.includes(option) ? 'border-brand-red bg-brand-red/10' : 'border-brand-offwhite/20'} cursor-pointer transition-all duration-300 hover:border-brand-red/50`}
                >
                  <input
                    type="checkbox"
                    checked={formData.mainFocus.includes(option)}
                    onChange={() => handleCheckboxChange(option)}
                    className="w-4 h-4 accent-brand-red"
                  />
                  <span className="text-brand-offwhite/90 text-sm">{option}</span>
                </label>
              ))}
            </div>
            {errors.mainFocus && (
              <p className="text-brand-red text-xs mt-1">{errors.mainFocus}</p>
            )}
          </div>

          {/* Improvement Goals */}
          <div className="space-y-2">
            <label className="block text-brand-offwhite/90 text-sm uppercase tracking-widest font-light">
              What would you like to improve? *
            </label>
            <textarea
              name="improvementGoals"
              value={formData.improvementGoals}
              onChange={handleInputChange}
              rows="6"
              className={`w-full bg-transparent border ${errors.improvementGoals ? 'border-brand-red' : 'border-brand-offwhite/20'} focus:border-brand-red px-6 py-4 text-brand-offwhite text-lg transition-all duration-300 focus:outline-none focus:shadow-[0_0_20px_rgba(239,6,6,0.3)] resize-none`}
              placeholder="Share your specific goals and areas you'd like to refine..."
            />
            {errors.improvementGoals && (
              <p className="text-brand-red text-xs mt-1">{errors.improvementGoals}</p>
            )}
          </div>

          {/* Program Interest */}
          <div className="space-y-2">
            <label className="block text-brand-offwhite/90 text-sm uppercase tracking-widest font-light">
              Program Interest *
            </label>
            <select
              name="programInterest"
              value={formData.programInterest}
              onChange={handleInputChange}
              className={`w-full bg-brand-black border ${errors.programInterest ? 'border-brand-red' : 'border-brand-offwhite/20'} focus:border-brand-red px-6 py-4 text-brand-offwhite text-lg transition-all duration-300 focus:outline-none focus:shadow-[0_0_20px_rgba(239,6,6,0.3)] cursor-pointer`}
            >
              <option value="" className="bg-brand-black">Select program</option>
              <option value="Beyond Elements" className="bg-brand-black">Beyond Elements</option>
              <option value="Beyond Artistry" className="bg-brand-black">Beyond Artistry</option>
              <option value="Not Sure Yet" className="bg-brand-black">Not Sure Yet</option>
            </select>
            {errors.programInterest && (
              <p className="text-brand-red text-xs mt-1">{errors.programInterest}</p>
            )}
          </div>

          {/* Preferred Training */}
          <div className="space-y-2">
            <label className="block text-brand-offwhite/90 text-sm uppercase tracking-widest font-light">
              Preferred Training Type *
            </label>
            <select
              name="preferredTraining"
              value={formData.preferredTraining}
              onChange={handleInputChange}
              className={`w-full bg-brand-black border ${errors.preferredTraining ? 'border-brand-red' : 'border-brand-offwhite/20'} focus:border-brand-red px-6 py-4 text-brand-offwhite text-lg transition-all duration-300 focus:outline-none focus:shadow-[0_0_20px_rgba(239,6,6,0.3)] cursor-pointer`}
            >
              <option value="" className="bg-brand-black">Select training type</option>
              <option value="Private" className="bg-brand-black">Private</option>
              <option value="Semi Private" className="bg-brand-black">Semi Private</option>
              <option value="Consultation First" className="bg-brand-black">Consultation First</option>
            </select>
            {errors.preferredTraining && (
              <p className="text-brand-red text-xs mt-1">{errors.preferredTraining}</p>
            )}
          </div>

          {/* WhatsApp Number */}
          <div className="space-y-2">
            <label className="block text-brand-offwhite/90 text-sm uppercase tracking-widest font-light">
              WhatsApp Number *
            </label>
            <input
              type="tel"
              name="whatsappNumber"
              value={formData.whatsappNumber}
              onChange={handleInputChange}
              className={`w-full bg-transparent border ${errors.whatsappNumber ? 'border-brand-red' : 'border-brand-offwhite/20'} focus:border-brand-red px-6 py-4 text-brand-offwhite text-lg transition-all duration-300 focus:outline-none focus:shadow-[0_0_20px_rgba(239,6,6,0.3)]`}
              placeholder="08xxxxxxxxxx"
            />
            {errors.whatsappNumber && (
              <p className="text-brand-red text-xs mt-1">{errors.whatsappNumber}</p>
            )}
          </div>

          {/* Instagram Username */}
          <div className="space-y-2">
            <label className="block text-brand-offwhite/90 text-sm uppercase tracking-widest font-light">
              Instagram Username <span className="text-brand-gray text-xs normal-case">(Optional)</span>
            </label>
            <div className="flex items-center border border-brand-offwhite/20 focus-within:border-brand-red transition-all duration-300 focus-within:shadow-[0_0_20px_rgba(239,6,6,0.3)]">
              <span className="px-6 text-brand-gray">@</span>
              <input
                type="text"
                name="instagramUsername"
                value={formData.instagramUsername}
                onChange={handleInputChange}
                className="flex-1 bg-transparent py-4 pr-6 text-brand-offwhite text-lg focus:outline-none"
                placeholder="username"
              />
            </div>
          </div>

          {/* Exclusive Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="pt-8 text-center"
          >
            <p className="text-brand-red text-sm italic mb-6">
              Limited private refinement slots available.
            </p>

            {/* Submit Button */}
            <button
              type="submit"
              className="group px-12 py-5 bg-brand-red text-brand-offwhite font-display text-xl uppercase tracking-wider transition-all duration-300 hover:bg-brand-red/90 hover:scale-105 hover:shadow-[0_0_40px_rgba(239,6,6,0.6)] relative overflow-hidden"
            >
              <span className="relative z-10">Start Application</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </motion.div>
        </motion.form>

        {/* Bottom Accent */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.5, delay: 1 }}
          className="mt-20 mx-auto max-w-md h-[1px] bg-gradient-to-r from-transparent via-brand-red to-transparent"
        />
      </div>
    </section>
  )
}
