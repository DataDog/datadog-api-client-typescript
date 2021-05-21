import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { GraphSnapshot } from '../models/GraphSnapshot';
/**
 * no description
 */
export declare class SnapshotsApiRequestFactory extends BaseAPIRequestFactory {
    /**
     * Take graph snapshots. **Note**: When a snapshot is created, there is some delay before it is available.
     * Take graph snapshots
     * @param start The POSIX timestamp of the start of the query.
     * @param end The POSIX timestamp of the end of the query.
     * @param metricQuery The metric query.
     * @param eventQuery A query that adds event bands to the graph.
     * @param graphDef A JSON document defining the graph. &#x60;graph_def&#x60; can be used instead of &#x60;metric_query&#x60;. The JSON document uses the [grammar defined here](https://docs.datadoghq.com/graphing/graphing_json/#grammar) and should be formatted to a single line then URL encoded.
     * @param title A title for the graph. If no title is specified, the graph does not have a title.
     */
    getGraphSnapshot(start: number, end: number, metricQuery?: string, eventQuery?: string, graphDef?: string, title?: string, options?: Configuration): Promise<RequestContext>;
}
export declare class SnapshotsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getGraphSnapshot
     * @throws ApiException if the response code was not in [200, 299]
     */
    getGraphSnapshot(response: ResponseContext): Promise<GraphSnapshot>;
}
