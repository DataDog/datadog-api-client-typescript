import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpFile } from '../http/http';
import { IdpResponse } from '../models/IdpResponse';
import { Organization } from '../models/Organization';
import { OrganizationCreateBody } from '../models/OrganizationCreateBody';
import { OrganizationCreateResponse } from '../models/OrganizationCreateResponse';
import { OrganizationListResponse } from '../models/OrganizationListResponse';
import { OrganizationResponse } from '../models/OrganizationResponse';
/**
 * no description
 */
export declare class OrganizationsApiRequestFactory extends BaseAPIRequestFactory {
    /**
     * Create a child organization.  This endpoint requires the [multi-organization account](https://docs.datadoghq.com/account_management/multi_organization/) feature and must be enabled by [contacting support](https://docs.datadoghq.com/help/).  Once a new child organization is created, you can interact with it by using the `org.public_id`, `pi_key.key`, and `application_key.hash` provided in the response.
     * Create a child organization
     * @param body Organization object that needs to be created
     */
    createChildOrg(body: OrganizationCreateBody, options?: Configuration): Promise<RequestContext>;
    /**
     * Get organization information.
     * Get organization information
     * @param publicId The &#x60;public_id&#x60; of the organization you are operating within.
     */
    getOrg(publicId: string, options?: Configuration): Promise<RequestContext>;
    /**
     * List your managed organizations.
     * List your managed organizations
     */
    listOrgs(options?: Configuration): Promise<RequestContext>;
    /**
     * Update your organization.
     * Update your organization
     * @param publicId The &#x60;public_id&#x60; of the organization you are operating within.
     * @param body
     */
    updateOrg(publicId: string, body: Organization, options?: Configuration): Promise<RequestContext>;
    /**
     * There are a couple of options for updating the Identity Provider (IdP) metadata from your SAML IdP.  * **Multipart Form-Data**: Post the IdP metadata file using a form post.  * **XML Body:** Post the IdP metadata file as the body of the request.
     * Upload IdP metadata
     * @param publicId The &#x60;public_id&#x60; of the organization you are operating with
     * @param idpFile The path to the XML metadata file you wish to upload.
     */
    uploadIdPForOrg(publicId: string, idpFile: HttpFile, options?: Configuration): Promise<RequestContext>;
}
export declare class OrganizationsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createChildOrg
     * @throws ApiException if the response code was not in [200, 299]
     */
    createChildOrg(response: ResponseContext): Promise<OrganizationCreateResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getOrg
     * @throws ApiException if the response code was not in [200, 299]
     */
    getOrg(response: ResponseContext): Promise<OrganizationResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listOrgs
     * @throws ApiException if the response code was not in [200, 299]
     */
    listOrgs(response: ResponseContext): Promise<OrganizationListResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateOrg
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateOrg(response: ResponseContext): Promise<OrganizationResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to uploadIdPForOrg
     * @throws ApiException if the response code was not in [200, 299]
     */
    uploadIdPForOrg(response: ResponseContext): Promise<IdpResponse>;
}
