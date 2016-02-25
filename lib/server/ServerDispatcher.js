"use strict";

var handlers = [];

var ServerDispatcher = {

    addRoute: function(route, rawRoute, callback) {
        handlers.unshift({
            route: route,
            rawRoute: rawRoute,
            callback: callback
        });
    },

    dispatch: function(fragment, expressRequest, environmentConfig) {
        var handlerForRoute = findHandlerForRoute(fragment);

        if (!handlerForRoute) {
            return null;
        }

        var handledRoute = {
            content: handlerForRoute.callback(
                fragment,
                expressRequest,
                environmentConfig
            ),
            handler: handlerForRoute
        };

        return handledRoute;
    },

    reset: function() {
        handlers.length = 0;
    }

};

function findHandlerForRoute(fragment) {
    var handler;

    for (var i = 0, len = handlers.length; i < len; i++) {
        handler = handlers[i];

        if (handler.route.test(fragment)) {
            return handler;
        }
    }
}

module.exports = ServerDispatcher;

// ----------------------------------------------------------------------------
// Copyright (C) 2016 Bloomberg Finance L.P.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ----------------------------- END-OF-FILE ----------------------------------
