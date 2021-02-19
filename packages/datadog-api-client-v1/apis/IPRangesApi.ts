// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import { Configuration, getServer } from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import FormData from "form-data";
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { IPRanges } from '../models/IPRanges';

/**
 * no description
 */
export class IPRangesApiRequestFactory extends BaseAPIRequestFactory {
    
    /**
     * Get information about Datadog IP ranges.
     * List IP Ranges
     */
    public async getIPRanges(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;
        
        // Path Params
        const localVarPath = '/';

        // Make Request Context
        const requestContext = getServer(config, 'IPRangesApi.getIPRanges').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
    
        // Header Params
    
        // Form Params


        // Body Params

        // Apply auth methods

        return requestContext;
    }

}



export class IPRangesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getIPRanges
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getIPRanges(response: ResponseContext): Promise<IPRanges > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: IPRanges = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "IPRanges", ""
            ) as IPRanges;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: IPRanges = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "IPRanges", ""
            ) as IPRanges;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
            
}
