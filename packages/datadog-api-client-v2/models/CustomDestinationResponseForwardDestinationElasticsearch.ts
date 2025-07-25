/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CustomDestinationResponseForwardDestinationElasticsearchType } from "./CustomDestinationResponseForwardDestinationElasticsearchType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The Elasticsearch destination.
 */
export class CustomDestinationResponseForwardDestinationElasticsearch {
  /**
   * Basic access authentication.
   */
  "auth": { [key: string]: any };
  /**
   * The destination for which logs will be forwarded to.
   * Must have HTTPS scheme and forwarding back to Datadog is not allowed.
   */
  "endpoint": string;
  /**
   * Name of the Elasticsearch index (must follow [Elasticsearch's criteria](https://www.elastic.co/guide/en/elasticsearch/reference/8.11/indices-create-index.html#indices-create-api-path-params)).
   */
  "indexName": string;
  /**
   * Date pattern with US locale and UTC timezone to be appended to the index name after adding `-`
   * (that is, `${index_name}-${indexPattern}`).
   * You can customize the index rotation naming pattern by choosing one of these options:
   * - Hourly: `yyyy-MM-dd-HH` (as an example, it would render: `2022-10-19-09`)
   * - Daily: `yyyy-MM-dd` (as an example, it would render: `2022-10-19`)
   * - Weekly: `yyyy-'W'ww` (as an example, it would render: `2022-W42`)
   * - Monthly: `yyyy-MM` (as an example, it would render: `2022-10`)
   *
   * If this field is missing or is blank, it means that the index name will always be the same
   * (that is, no rotation).
   */
  "indexRotation"?: string;
  /**
   * Type of the Elasticsearch destination.
   */
  "type": CustomDestinationResponseForwardDestinationElasticsearchType;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

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
      type: "{ [key: string]: any; }",
      required: true,
    },
    endpoint: {
      baseName: "endpoint",
      type: "string",
      required: true,
    },
    indexName: {
      baseName: "index_name",
      type: "string",
      required: true,
    },
    indexRotation: {
      baseName: "index_rotation",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "CustomDestinationResponseForwardDestinationElasticsearchType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CustomDestinationResponseForwardDestinationElasticsearch.attributeTypeMap;
  }

  public constructor() {}
}
