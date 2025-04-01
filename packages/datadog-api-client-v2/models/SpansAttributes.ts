/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * JSON object containing all span attributes and their associated values.
*/
export class SpansAttributes {
  /**
   * JSON object of attributes from your span.
  */
  "attributes"?: { [key: string]: any; };
  /**
   * JSON object of custom spans data.
  */
  "custom"?: { [key: string]: any; };
  /**
   * End timestamp of your span.
  */
  "endTimestamp"?: Date;
  /**
   * Name of the environment from where the spans are being sent.
  */
  "env"?: string;
  /**
   * Name of the machine from where the spans are being sent.
  */
  "host"?: string;
  /**
   * The reason why the span was ingested.
  */
  "ingestionReason"?: string;
  /**
   * Id of the span that's parent of this span.
  */
  "parentId"?: string;
  /**
   * Unique identifier of the resource.
  */
  "resourceHash"?: string;
  /**
   * The name of the resource.
  */
  "resourceName"?: string;
  /**
   * The reason why the span was indexed.
  */
  "retainedBy"?: string;
  /**
   * The name of the application or service generating the span events.
   * It is used to switch from APM to Logs, so make sure you define the same
   * value when you use both products.
  */
  "service"?: string;
  /**
   * Whether or not the span was collected as a stand-alone span. Always associated to "single_span" ingestion_reason if true.
  */
  "singleSpan"?: boolean;
  /**
   * Id of the span.
  */
  "spanId"?: string;
  /**
   * Start timestamp of your span.
  */
  "startTimestamp"?: Date;
  /**
   * Array of tags associated with your span.
  */
  "tags"?: Array<string>;
  /**
   * Id of the trace to which the span belongs.
  */
  "traceId"?: string;
  /**
   * The type of the span.
  */
  "type"?: string;

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
    "attributes": {
      "baseName": "attributes",
      "type": "{ [key: string]: any; }",
    },
    "custom": {
      "baseName": "custom",
      "type": "{ [key: string]: any; }",
    },
    "endTimestamp": {
      "baseName": "end_timestamp",
      "type": "Date",
      "format": "date-time",
    },
    "env": {
      "baseName": "env",
      "type": "string",
    },
    "host": {
      "baseName": "host",
      "type": "string",
    },
    "ingestionReason": {
      "baseName": "ingestion_reason",
      "type": "string",
    },
    "parentId": {
      "baseName": "parent_id",
      "type": "string",
    },
    "resourceHash": {
      "baseName": "resource_hash",
      "type": "string",
    },
    "resourceName": {
      "baseName": "resource_name",
      "type": "string",
    },
    "retainedBy": {
      "baseName": "retained_by",
      "type": "string",
    },
    "service": {
      "baseName": "service",
      "type": "string",
    },
    "singleSpan": {
      "baseName": "single_span",
      "type": "boolean",
    },
    "spanId": {
      "baseName": "span_id",
      "type": "string",
    },
    "startTimestamp": {
      "baseName": "start_timestamp",
      "type": "Date",
      "format": "date-time",
    },
    "tags": {
      "baseName": "tags",
      "type": "Array<string>",
    },
    "traceId": {
      "baseName": "trace_id",
      "type": "string",
    },
    "type": {
      "baseName": "type",
      "type": "string",
    },
    "additionalProperties": {
      "baseName": "additionalProperties",
      "type": "any",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return SpansAttributes.attributeTypeMap;

  }

  public constructor() {











  }
}









