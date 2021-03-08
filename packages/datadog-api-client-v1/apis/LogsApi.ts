// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration, getServer } from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import FormData from "form-data";
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { APIErrorResponse } from '../models/APIErrorResponse';
import { LogsAPIErrorResponse } from '../models/LogsAPIErrorResponse';
import { LogsListRequest } from '../models/LogsListRequest';
import { LogsListResponse } from '../models/LogsListResponse';

/**
 * no description
 */
export class LogsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * List endpoint returns logs that match a log search query. [Results are paginated][1].  **If you are considering archiving logs for your organization, consider use of the Datadog archive capabilities instead of the log list API. See [Datadog Logs Archive documentation][2].**  [1]: /logs/guide/collect-multiple-logs-with-pagination [2]: https://docs.datadoghq.com/logs/archives
     * Search logs
     * @param body Logs filter
     */
    public async listLogs(body: LogsListRequest, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError('Required parameter body was null or undefined when calling listLogs.');
        }


        // Path Params
        const localVarPath = '/api/v1/logs-queries/list';

        // Make Request Context
        const requestContext = getServer(config, 'LogsApi.listLogs').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "LogsListRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["apiKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = config.authMethods["appKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class LogsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listLogs
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listLogs(response: ResponseContext): Promise<LogsListResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LogsListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LogsListResponse", ""
            ) as LogsListResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: LogsAPIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LogsAPIErrorResponse", ""
            ) as LogsAPIErrorResponse;
            throw new ApiException<LogsAPIErrorResponse>(400, body);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(403, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LogsListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LogsListResponse", ""
            ) as LogsListResponse;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
