// Copyright 2017 The TIE Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Unit tests for the FeedbackGeneratorService.
 */

describe('FeedbackGeneratorService', function() {
  var CodeEvalResultObjectFactory;
  var FeedbackGeneratorService;

  beforeEach(module('tie'));
  beforeEach(inject(function($injector) {
    CodeEvalResultObjectFactory = $injector.get('CodeEvalResultObjectFactory');
    FeedbackGeneratorService = $injector.get('FeedbackGeneratorService');
  }));

  describe('getFeedback', function() {
    it('should return an error if one exists', function() {
      var questionMock = {};
      var codeEvalResult = CodeEvalResultObjectFactory.create(
        'some code', 'some output', 'ERROR MESSAGE');

      expect(
        FeedbackGeneratorService.getFeedback(questionMock, codeEvalResult)
      ).toBe('Your code threw an error: ERROR MESSAGE');
    });
  })
});
