/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ElasticsearchDestinationType } from "./ElasticsearchDestinationType";
import { HttpDestinationBasicAuth } from "./HttpDestinationBasicAuth";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The Elasticsearch destination.
 */
export class ElasticsearchDestination {
  /**
   * The HTTP destination basic username and password auth.
   */
  "auth"?: HttpDestinationBasicAuth;
  /**
   * The intake URL to forward events to.
   */
  "endpoint": string;
  /**
   * The Elasticsearch index name.
   */
  "indexName": string;
  /**
   * The pattern to append to the index name for rotation in Elasticsearch.
   */
  "indexRotation": string;
  /**
   * The Elasticsearch destination type.
   */
  "type": ElasticsearchDestinationType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    auth: {
      baseName: "auth",
      type: "HttpDestinationBasicAuth",
    },
    endpoint: {
      baseName: "endpoint",
      type: "string",
      required: true,
    },
    indexName: {
      baseName: "indexName",
      type: "string",
      required: true,
    },
    indexRotation: {
      baseName: "indexRotation",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ElasticsearchDestinationType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ElasticsearchDestination.attributeTypeMap;
  }

  public constructor() {}
}
