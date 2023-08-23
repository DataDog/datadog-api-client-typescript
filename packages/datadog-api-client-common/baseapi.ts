import { Configuration } from "./configuration";
import { ApiException } from "./exception";
import { logger } from "../../logger";
import { ResponseContext } from "./http/http";

/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
  csv: ",",
  ssv: " ",
  tsv: "\t",
  pipes: "|",
};

/**
 *
 * @export
 * @class BaseAPI
 */
export class BaseAPIRequestFactory {
  constructor(protected configuration: Configuration) {}
}

/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
  constructor(
    public field: string,
    operation: string
  ) {
    super(
      `Required parameter ${field} was null or undefined when calling ${operation}.`
    );
    this.name = "RequiredError";
  }
}

export async function deserializeError<T>(
  serializer: any,
  typeText: string,
  response: ResponseContext,
  contentType: string
): Promise<void> {
  const bodyText = serializer.parse(await response.body.text(), contentType);
  let body: T;
  try {
    body = serializer.deserialize(bodyText, typeText) as T;
  } catch (error) {
    logger.info(`Got error deserializing error: ${error}`);
    throw new ApiException<T>(response.httpStatusCode, bodyText);
  }
  throw new ApiException<T>(response.httpStatusCode, body);
}
