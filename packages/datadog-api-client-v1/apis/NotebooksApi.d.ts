import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { NotebookCreateRequest } from '../models/NotebookCreateRequest';
import { NotebookResponse } from '../models/NotebookResponse';
import { NotebookUpdateRequest } from '../models/NotebookUpdateRequest';
import { NotebooksResponse } from '../models/NotebooksResponse';
/**
 * no description
 */
export declare class NotebooksApiRequestFactory extends BaseAPIRequestFactory {
    /**
     * Create a notebook using the specified options.
     * Create a notebook
     * @param body The JSON description of the notebook you want to create.
     */
    createNotebook(body: NotebookCreateRequest, options?: Configuration): Promise<RequestContext>;
    /**
     * Delete a notebook using the specified ID.
     * Delete a notebook
     * @param notebookId Unique ID, assigned when you create the notebook.
     */
    deleteNotebook(notebookId: number, options?: Configuration): Promise<RequestContext>;
    /**
     * Get a notebook using the specified notebook ID.
     * Get a notebook
     * @param notebookId Unique ID, assigned when you create the notebook.
     */
    getNotebook(notebookId: number, options?: Configuration): Promise<RequestContext>;
    /**
     * Get all notebooks. This can also be used to search for notebooks with a particular `query` in the notebook `name` or author `handle`.
     * Get all notebooks
     * @param authorHandle Return notebooks created by the given &#x60;author_handle&#x60;.
     * @param excludeAuthorHandle Return notebooks not created by the given &#x60;author_handle&#x60;.
     * @param start The index of the first notebook you want returned.
     * @param count The number of notebooks to be returned.
     * @param sortField Sort by field &#x60;modified&#x60; or &#x60;name&#x60;.
     * @param sortDir Sort by direction &#x60;asc&#x60; or &#x60;desc&#x60;.
     * @param query Return only notebooks with &#x60;query&#x60; string in notebook name or author handle.
     * @param includeCells Value of &#x60;false&#x60; excludes the &#x60;cells&#x60; and global &#x60;time&#x60; for each notebook.
     */
    listNotebooks(authorHandle?: string, excludeAuthorHandle?: string, start?: number, count?: number, sortField?: string, sortDir?: string, query?: string, includeCells?: boolean, options?: Configuration): Promise<RequestContext>;
    /**
     * Update a notebook using the specified ID.
     * Update a notebook
     * @param notebookId Unique ID, assigned when you create the notebook.
     * @param body Update notebook request body.
     */
    updateNotebook(notebookId: number, body: NotebookUpdateRequest, options?: Configuration): Promise<RequestContext>;
}
export declare class NotebooksApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createNotebook
     * @throws ApiException if the response code was not in [200, 299]
     */
    createNotebook(response: ResponseContext): Promise<NotebookResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteNotebook
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteNotebook(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getNotebook
     * @throws ApiException if the response code was not in [200, 299]
     */
    getNotebook(response: ResponseContext): Promise<NotebookResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listNotebooks
     * @throws ApiException if the response code was not in [200, 299]
     */
    listNotebooks(response: ResponseContext): Promise<NotebooksResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateNotebook
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateNotebook(response: ResponseContext): Promise<NotebookResponse>;
}
