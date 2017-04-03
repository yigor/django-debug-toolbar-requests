from setuptools import find_packages, setup

setup(
    name='django-debug-toolbar-requests',
    version='1.0',
    packages=find_packages(),
    url='https://github.com/ENERGYLINX/django-debug-toolbar-requests',
    license='',
    author='Martin Voldrich',
    author_email='rbas.cz@gmail.com',
    description='Adds requests debuging information',
    long_description=open('README.rst').read(),
    include_package_data=True,
    zip_safe=False,
    classifiers=[
        'Environment :: Web Environment',
        'Framework :: Django',
        'Intended Audience :: Developers',
        'Operating System :: OS Independent',
        'Programming Language :: Python',
        'Topic :: Database',
        'Topic :: Software Development :: Libraries :: Python Modules',
    ],
)
