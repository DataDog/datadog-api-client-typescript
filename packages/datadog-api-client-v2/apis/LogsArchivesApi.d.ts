import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { LogsArchive } from '../models/LogsArchive';
import { LogsArchiveCreateRequest } from '../models/LogsArchiveCreateRequest';
import { LogsArchiveOrder } from '../models/LogsArchiveOrder';
import { LogsArchives } from '../models/LogsArchives';
import { RelationshipToRole } from '../models/RelationshipToRole';
import { RolesResponse } from '../models/RolesResponse';
/**
 * no description
 */
export declare class LogsArchivesApiRequestFactory extends BaseAPIRequestFactory {
    /**
     * Adds a read role to an archive. ([Roles API](https://docs.datadoghq.com/api/v2/roles/))
     * Grant role to an archive
     * @param archiveId The ID of the archive.
     * @param body
     */
    addReadRoleToArchive(archiveId: string, body: RelationshipToRole, options?: Configuration): Promise<RequestContext>;
    /**
     * Create an archive in your organization.
     * Create an archive
     * @param body The definition of the new archive.
     */
    createLogsArchive(body: LogsArchiveCreateRequest, options?: Configuration): Promise<RequestContext>;
    /**
     * Delete a given archive from your organization.
     * Delete an archive
     * @param archiveId The ID of the archive.
     */
    deleteLogsArchive(archiveId: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Get a specific archive from your organization.
     * Get an archive
     * @param archiveId The ID of the archive.
     */
    getLogsArchive(archiveId: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Get the current order of your archives. This endpoint takes no JSON arguments.
     * Get archive order
     */
    getLogsArchiveOrder(options?: Configuration): Promise<RequestContext>;
    /**
     * Returns all read roles a given archive is restricted to.
     * List read roles for an archive
     * @param archiveId The ID of the archive.
     */
    listArchiveReadRoles(archiveId: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Get the list of configured logs archives with their definitions.
     * Get all archives
     */
    listLogsArchives(options?: Configuration): Promise<RequestContext>;
    /**
     * Removes a role from an archive. ([Roles API](https://docs.datadoghq.com/api/v2/roles/))
     * Revoke role from an archive
     * @param archiveId The ID of the archive.
     * @param body
     */
    removeRoleFromArchive(archiveId: string, body: RelationshipToRole, options?: Configuration): Promise<RequestContext>;
    /**
     * Update a given archive configuration.  **Note**: Using this method updates your archive configuration by **replacing** your current configuration with the new one sent to your Datadog organization.
     * Update an archive
     * @param archiveId The ID of the archive.
     * @param body New definition of the archive.
     */
    updateLogsArchive(archiveId: string, body: LogsArchiveCreateRequest, options?: Configuration): Promise<RequestContext>;
    /**
     * Update the order of your archives. Since logs are processed sequentially, reordering an archive may change the structure and content of the data processed by other archives.  **Note**: Using the `PUT` method updates your archive's order by replacing the current order with the new one.
     * Update archive order
     * @param body An object containing the new ordered list of archive IDs.
     */
    updateLogsArchiveOrder(body: LogsArchiveOrder, options?: Configuration): Promise<RequestContext>;
}
export declare class LogsArchivesApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addReadRoleToArchive
     * @throws ApiException if the response code was not in [200, 299]
     */
    addReadRoleToArchive(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createLogsArchive
     * @throws ApiException if the response code was not in [200, 299]
     */
    createLogsArchive(response: ResponseContext): Promise<LogsArchive>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteLogsArchive
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteLogsArchive(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getLogsArchive
     * @throws ApiException if the response code was not in [200, 299]
     */
    getLogsArchive(response: ResponseContext): Promise<LogsArchive>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getLogsArchiveOrder
     * @throws ApiException if the response code was not in [200, 299]
     */
    getLogsArchiveOrder(response: ResponseContext): Promise<LogsArchiveOrder>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listArchiveReadRoles
     * @throws ApiException if the response code was not in [200, 299]
     */
    listArchiveReadRoles(response: ResponseContext): Promise<RolesResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listLogsArchives
     * @throws ApiException if the response code was not in [200, 299]
     */
    listLogsArchives(response: ResponseContext): Promise<LogsArchives>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to removeRoleFromArchive
     * @throws ApiException if the response code was not in [200, 299]
     */
    removeRoleFromArchive(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateLogsArchive
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateLogsArchive(response: ResponseContext): Promise<LogsArchive>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateLogsArchiveOrder
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateLogsArchiveOrder(response: ResponseContext): Promise<LogsArchiveOrder>;
}
