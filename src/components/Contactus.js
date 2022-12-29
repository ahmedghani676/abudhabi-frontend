import useForm from './useForm'
import validate from './LoginFormValidationRules'
import Layout from './Layout/index'
import { useTranslation } from 'react-i18next'
import Captcha from 'demos-react-captcha'
import { redirectTo } from '@reach/router'

const Contactus = () => {
  const translateDataSites = (data) => {
    switch (data) {
      case 'Your name field is required.':
        return t('part124')
      case 'Your email field is required.':
        return t('part125')
      case 'Subject field is required.':
        return t('part126')
      case 'Message field is required.':
        return t('part127')
      case 'What code is in the image ? field is required.':
        return t('part128')
      default:
        break
    }
  }

  const { t, i18n } = useTranslation()

  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validate
  )

  function login() {
    redirectTo('/')
  }

  return (
    <Layout title="Contact Us">
      <div
        style={{
          backgroundColor: '#F5F5F5',
          fontFamily: i18n.language === 'ar' ? 'NotoKufiArabic' : 'circularSTD',
          textAlign: i18n.language === 'ar' ? 'right' : 'left',
          direction: i18n.language === 'ar' ? 'rtl' : 'ltr',
        }}
      >
        <div className="container">
          <form onSubmit={handleSubmit} noValidate>
            {/* name */}
            <div className="form-group">
              <label htmlFor="name" className="font-weight-bold">
                {t('part41')}
                &nbsp;
                <span className="text-danger">*</span>
              </label>
              <div className="control">
                <input
                  style={{
                    textAlign: i18n.language === 'ar' ? 'right' : 'left',
                  }}
                  className={`input ${
                    errors.name && 'border border-danger'
                  } form-control`}
                  type="name"
                  name="name"
                  onChange={handleChange}
                  value={values.name || ''}
                  required
                />
                {errors.name && <p className="text-danger">{t('part124')}</p>}
              </div>
            </div>
            {/* email */}
            <div className="form-group">
              <label htmlFor="email" className="font-weight-bold">
                {t('part42')} &nbsp;
                <span className="text-danger">*</span>
              </label>
              <input
                style={{
                  textAlign: i18n.language === 'ar' ? 'right' : 'left',
                }}
                className={`input ${
                  errors.email && 'border border-danger'
                } form-control`}
                type="email"
                name="email"
                onChange={handleChange}
                value={values.email || ''}
                required
              />
              {errors.email && <p className="text-danger">{t('part125')}</p>}
            </div>
            {/* subject */}
            <div className="form-group">
              <label htmlFor="subject" className="font-weight-bold">
                {t('part43')}
                &nbsp;
                <span className="text-danger">*</span>
              </label>
              <div className="control">
                <input
                  style={{
                    textAlign: i18n.language === 'ar' ? 'right' : 'left',
                  }}
                  className={`input ${
                    errors.subject && 'border border-danger'
                  } form-control`}
                  type="subject"
                  name="subject"
                  onChange={handleChange}
                  value={values.subject || ''}
                  required
                />
                {errors.subject && (
                  <p className="text-danger">{t('part126')}</p>
                )}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message" className="font-weight-bold">
                {t('part44')} &nbsp;
                <span className="text-danger">*</span>
              </label>
              <textarea
                style={{
                  textAlign: i18n.language === 'ar' ? 'right' : 'left',
                }}
                className={`input ${
                  errors.message && 'border border-danger'
                } form-control`}
                type="message"
                name="message"
                as="textarea"
                rows={4}
                cols={10}
                onChange={handleChange}
                value={values.message || ''}
                required
              />
              {errors.message && <p className="text-danger">{t('part127')}</p>}
            </div>
            {/* CAPTCHA */}
            <div
              className="form-group"
              style={{
                background: '#ffffff',
                borderRadius: '4px',
                padding: '1.5px',
              }}
            >
              <div
                style={{
                  background: '#CDCDCD',
                  borderRadius: '4px',
                  padding: '10px 15px',
                }}
              >
                <label htmlFor="content" className="font-weight-bold">
                  {t('part45')}&nbsp;
                  <span className="text-danger">*</span>
                </label>
              </div>
              <div style={{ padding: '4px 14px' }}>
                <p style={{ color: '#737373' }}>{t('part128')}</p>
                <p>
                  <b>{t('part47')}</b>
                </p>

                <Captcha
                  id="recahptca"
                  name="recahptca"
                  onChange={(event) => {
                    // eslint-disable-next-line no-undef
                    setFieldValue('recahptca', event.target.value)
                  }}
                />
                <input
                  style={{
                    textAlign: i18n.language === 'ar' ? 'right' : 'left',
                  }}
                  className={`input ${
                    errors.recahptca && 'border border-danger'
                  } form-control mt-4`}
                  type="recahptca"
                  name="recahptca"
                  onChange={handleChange}
                  value={values.recahptca || ''}
                  required
                />
                {errors.recahptca && (
                  <p className="text-danger">{t('part128')}</p>
                )}
              </div>
            </div>

            <div className="form-group d-flex justify-content-center py-5">
              <button
                type="submit"
                className="btn btn-success btn-lg"
                style={{
                  backgroundColor: '#5CB85C',
                }}
              >
                <b>{t('part49')}</b>
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default Contactus
