unit-test:

	@node ./node_modules/.bin/karma start karma.conf.js

test:

	make unit-test

.PHONY: test
