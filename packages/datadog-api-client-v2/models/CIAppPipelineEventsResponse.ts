/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CIAppPipelineEvent } from "./CIAppPipelineEvent";
import { CIAppResponseLinks } from "./CIAppResponseLinks";
import { CIAppResponseMetadata } from "./CIAppResponseMetadata";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response object with all pipeline events matching the request and pagination information.
 */
export class CIAppPipelineEventsResponse {
  /**
   * Array of events matching the request.
   */
  "data"?: Array<CIAppPipelineEvent>;
  /**
   * Links attributes.
   */
  "links"?: CIAppResponseLinks;
  /**
   * The metadata associated with a request.
   */
  "meta"?: CIAppResponseMetadata;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "Array<CIAppPipelineEvent>",
    },
    links: {
      baseName: "links",
      type: "CIAppResponseLinks",
    },
    meta: {
      baseName: "meta",
      type: "CIAppResponseMetadata",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CIAppPipelineEventsResponse.attributeTypeMap;
  }

  public constructor() {}
}
