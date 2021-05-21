import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { SLOCorrectionCreateRequest } from '../models/SLOCorrectionCreateRequest';
import { SLOCorrectionListResponse } from '../models/SLOCorrectionListResponse';
import { SLOCorrectionResponse } from '../models/SLOCorrectionResponse';
import { SLOCorrectionUpdateRequest } from '../models/SLOCorrectionUpdateRequest';
/**
 * no description
 */
export declare class ServiceLevelObjectiveCorrectionsApiRequestFactory extends BaseAPIRequestFactory {
    /**
     * Create an SLO Correction
     * Create an SLO correction
     * @param body Create an SLO Correction
     */
    createSLOCorrection(body: SLOCorrectionCreateRequest, options?: Configuration): Promise<RequestContext>;
    /**
     * Permanently delete the specified SLO correction object
     * Delete an SLO correction
     * @param sloCorrectionId The ID of the SLO correction object
     */
    deleteSLOCorrection(sloCorrectionId: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Get an SLO correction
     * Get an SLO correction for an SLO
     * @param sloCorrectionId The ID of the SLO correction object
     */
    getSLOCorrection(sloCorrectionId: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Get all Service Level Objective corrections
     * Get all SLO corrections
     */
    listSLOCorrection(options?: Configuration): Promise<RequestContext>;
    /**
     * Update the specified SLO correction object object
     * Update an SLO correction
     * @param sloCorrectionId The ID of the SLO correction object
     * @param body The edited SLO correction object.
     */
    updateSLOCorrection(sloCorrectionId: string, body: SLOCorrectionUpdateRequest, options?: Configuration): Promise<RequestContext>;
}
export declare class ServiceLevelObjectiveCorrectionsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createSLOCorrection
     * @throws ApiException if the response code was not in [200, 299]
     */
    createSLOCorrection(response: ResponseContext): Promise<SLOCorrectionResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteSLOCorrection
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteSLOCorrection(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSLOCorrection
     * @throws ApiException if the response code was not in [200, 299]
     */
    getSLOCorrection(response: ResponseContext): Promise<SLOCorrectionResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listSLOCorrection
     * @throws ApiException if the response code was not in [200, 299]
     */
    listSLOCorrection(response: ResponseContext): Promise<SLOCorrectionListResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateSLOCorrection
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateSLOCorrection(response: ResponseContext): Promise<SLOCorrectionResponse>;
}
