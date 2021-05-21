import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { HostListResponse } from '../models/HostListResponse';
import { HostMuteResponse } from '../models/HostMuteResponse';
import { HostMuteSettings } from '../models/HostMuteSettings';
import { HostTotals } from '../models/HostTotals';
/**
 * no description
 */
export declare class HostsApiRequestFactory extends BaseAPIRequestFactory {
    /**
     * This endpoint returns the total number of active and up hosts in your Datadog account. Active means the host has reported in the past hour, and up means it has reported in the past two hours.
     * Get the total number of active hosts
     * @param from Number of seconds from which you want to get total number of active hosts.
     */
    getHostTotals(from?: number, options?: Configuration): Promise<RequestContext>;
    /**
     * This endpoint allows searching for hosts by name, alias, or tag. Hosts live within the past 3 hours are included by default. Retention is 7 days. Results are paginated with a max of 1000 results at a time.
     * Get all hosts for your organization
     * @param filter String to filter search results.
     * @param sortField Sort hosts by this field.
     * @param sortDir Direction of sort. Options include &#x60;asc&#x60; and &#x60;desc&#x60;.
     * @param start Host result to start search from.
     * @param count Number of hosts to return. Max 1000.
     * @param from Number of seconds since UNIX epoch from which you want to search your hosts.
     * @param includeMutedHostsData Include information on the muted status of hosts and when the mute expires.
     * @param includeHostsMetadata Include additional metadata about the hosts (agent_version, machine, platform, processor, etc.).
     */
    listHosts(filter?: string, sortField?: string, sortDir?: string, start?: number, count?: number, from?: number, includeMutedHostsData?: boolean, includeHostsMetadata?: boolean, options?: Configuration): Promise<RequestContext>;
    /**
     * Mute a host.
     * Mute a host
     * @param hostName Name of the host to mute.
     * @param body Mute a host request body.
     */
    muteHost(hostName: string, body: HostMuteSettings, options?: Configuration): Promise<RequestContext>;
    /**
     * Unmutes a host. This endpoint takes no JSON arguments.
     * Unmute a host
     * @param hostName Name of the host to unmute.
     */
    unmuteHost(hostName: string, options?: Configuration): Promise<RequestContext>;
}
export declare class HostsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getHostTotals
     * @throws ApiException if the response code was not in [200, 299]
     */
    getHostTotals(response: ResponseContext): Promise<HostTotals>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listHosts
     * @throws ApiException if the response code was not in [200, 299]
     */
    listHosts(response: ResponseContext): Promise<HostListResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to muteHost
     * @throws ApiException if the response code was not in [200, 299]
     */
    muteHost(response: ResponseContext): Promise<HostMuteResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to unmuteHost
     * @throws ApiException if the response code was not in [200, 299]
     */
    unmuteHost(response: ResponseContext): Promise<HostMuteResponse>;
}
